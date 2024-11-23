<?php 

# --------------------------------------------------------------------
# Description
#
# weerdata.php - show a weather icon or error image
# --------------------------------------------------------------------

# --------------------------------------------------------------------
# Configuration
# --------------------------------------------------------------------

# Basedir
$data_file = './data/weerdata.json';

# Size (px)
$size = 80;

# Font
$font = "./arial.ttf";
# $font = "c:/windows/fonts/arial.ttf";

# Font size for the value
$value_fontsize = round($size/3/1.333);

# Font size for the unit
$unit_fontsize = round($value_fontsize/2);

# Font size for the timestamp
$time_fontsize = 10;

# Error
$error = 0;

# Error blocks
$error_blocks = 9;

# Define data object
$data = (object) array();

# --------------------------------------------------------------------
# Load the data
# --------------------------------------------------------------------

if (!file_exists($data_file)) {
  $error = 1;
}
else {
  $data = json_decode(file_get_contents($data_file));
}

# --------------------------------------------------------------------
# Get and validate $measure
# --------------------------------------------------------------------

if (!isset($_GET['meting'])) {
  $meassure = NULL;
}
else {
  $meassure = $_GET['meting'];
}

if ($meassure == NULL) {
  $error = 1;
}
elseif (!isset($data->{$meassure})) {
  $error = 1;
}
elseif (time() > strtotime($data->{$meassure}->{"expires"})) {
  $error = 1;
}

# --------------------------------------------------------------------
# Show the image or an error image
# --------------------------------------------------------------------

if ($error == 0) {
  # Make the image
  $value = $data->{$meassure};
  $filename = $meassure . ".jpg";

  # Define image and colors
  $img = imagecreate($size, $size);
  $black = imagecolorallocate($img, 0, 0, 0);
  $yellow = imagecolorallocate($img, 255, 215, 0);
  $red = imagecolorallocate($img, 255, 20, 0);

  imagefill($img, 0, 0, $black);

  $color = $yellow;
  if ($value->{"caption"} != "") {
    $color = $red;
  }

  # Draw value
  $unit_size = getSize($unit_fontsize, $font, " " . $value->{"unit"});
  $value_size = getSize($value_fontsize, $font, $value->{"value"});
  $value_x = imagesx($img)/2 - ($value_size[0] + $unit_size[0])/2;
  $value_y = imagesy($img)/2 + $value_size[1]/2;
  imagettftext($img, $value_fontsize, 0, $value_x, $value_y, $color, $font, $value->{"value"});

  # Draw unit
  $unit_x = $value_x + $value_size[0];
  $unit_y = imagesy($img)/2 - $value_size[1]/2 + $unit_size[1];
  imagettftext($img, $unit_fontsize, 0, $unit_x, $unit_y, $color, $font, " " . $value->{"unit"});

  # Draw caption
  $time_size = getSize($time_fontsize, $font, $value->{"caption"});
  $time_x = imagesx($img) / 2 - $time_size[0] / 2;
  $time_y = imagesy($img) - 10;
  imagettftext($img, $time_fontsize, 0, $time_x, $time_y, $color, $font, $value->{"caption"});
}
else {
  # Load the error image
  switch($meassure) {
    case "temperatuur":
      $error_image = sprintf("error_temperatuur%02d.jpg", rand(1,25));
      break;
    case "ijsselpeil":
      $error_image = sprintf("error_ijsselpeil%02d.jpg", rand(1,25));
      break;
    default:
      $error_image = "fubar";
  }

  if (file_exists("./error/" . $error_image)) {
    $img = imagecreatefromjpeg($dir . "error/" . $error_image);
    $filename = $error_image;
  }
  else {
    # Something unexpected happened, draw something unexpected
    $filename = "error.jpg";

    # Create image and pallette
    $img = imagecreate($size, $size);
    $black = imagecolorallocate($img, 0, 0, 0);
    $yellow = imagecolorallocate($img, 255, 215, 0);

    # Calculate size, x and y.
    $error_size = round($size / 1.5);
    $error_size = $error_size - $error_size % $error_blocks;
    $block_size = $error_size / $error_blocks;

    $value_size = array($error_size, $error_size);

    $value_x = round(imagesx($img)/2 - $value_size[0]/2);
    $value_y = round(imagesy($img)/2 + $value_size[1]/2);

    # Add some randomness
    $left_hand = 27;
    $right_hand = 53;
    if (rand(0,1)) {
      $left_hand = 45;
    }
    if (rand(0,1)) {
      $right_hand = 35;  
    }

    # Draw
    imagefill($img, 0, 0, $black);
 
    for ($i = 0; $i <= ($error_blocks*$error_blocks)-1; $i++) {
      $x0 = $value_x + ($i%$error_blocks) * $block_size;
      $y0 = $value_y - $error_size + floor($i/$error_blocks) * $block_size;
      $x1 = $x0 + $block_size;
      $y1 = $y0 + $block_size;

      if ($i == 21 || $i == 23  || ($i >= 29 && $i <= 33) || $i == 37 || $i == 38 || $i == 40 | $i == 42 || $i ==43 || ($i >= 47 && $i <= 51) || $i == 57 || $i == 59 || $i == 65 || $i == 66 || $i == 68 || $i == 69 || $i == $left_hand || $i == $right_hand) {
        imagepolygon($img, array($x0, $y0, $x0, $y1, $x1, $y1, $x1, $y0), 4, $yellow);
        imagefill($img, $x0+1, $y0+1, $black);
      }
    }
  }
}

# --------------------------------------------------------------------
# Output
# --------------------------------------------------------------------

header("Content-type: image/jpeg");
header("Content-Disposition: filename=" . $filename);
imagejpeg($img);

# --------------------------------------------------------------------
# Clean
# --------------------------------------------------------------------
 
imagedestroy($img);

# --------------------------------------------------------------------
# Functions
# --------------------------------------------------------------------

function getSize($fontsize, $font, $text) {
   $bbox = imagettfbbox($fontsize, 0, $font, $text);
   $width = abs($bbox[2] - $bbox[0]);
   $height = abs($bbox[1] - $bbox[5]);
   
   return array($width, $height);
}

?>
