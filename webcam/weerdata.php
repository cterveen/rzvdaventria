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
$dir = './';

# Size (px)
$size = 100;

# Number of blocks in a row/column for the error
$error_blocks = 9;

# Error
$error = 0;

# --------------------------------------------------------------------
# Get and validate $image
# --------------------------------------------------------------------

if (!isset($_GET['image'])) {
  $image = NULL;
}
else {
  $image = $_GET['image'];
}

$image = str_replace(array("/", ".."), "", $image); // Prevent abuse

if ($image == NULL) {
  $error = 1;
}
elseif (!file_exists($dir . $image)) {
  $error = 1;
}
elseif ((time() - filectime($dir . $image))/60/60 > 1) {
  # image uploaded more than an hour ago
  $error = 1;	
}

# --------------------------------------------------------------------
# Show the image or an error image
# --------------------------------------------------------------------

if ($error == 0) {
  # Load image from file
  $extension = strtolower(substr($image, strrpos($image, ".") + 1));

  switch ($extension) {
    case 'jpg':
    case 'jpeg':
        $background = imagecreatefromjpeg($dir . $image);
        break;
    case 'png':
        $background = imagecreatefrompng($dir . $image);
        break;
    case 'gif':
        $background = imagecreatefromgif($dir . $image);
        break;
    default:
        die("Image is of unsupported type.");
  }
}
else {
  # Load the error immage
  
    # Get unit and timestamp	
  switch($image) {
	case "temp_achter.gif":
	  $image = sprintf("error_temp%02d.jpg", rand(1,25));
	  break;
	case "IJsselpeil.gif":
	  $image = sprintf("error_peil%02d.jpg", rand(1,25));
	  break;
	default:
	  $image = "fubar";
  }
  
  if (file_exists($dir . "error/" . $image)) {
    $background = imagecreatefromjpeg($dir . "error/" . $image);
  }
  else {
    // something happened, draw something
	
    # Create image and pallette
    $background = imagecreate($size, $size);
    $black = imagecolorallocate($background, 0, 0, 0);
    $yellow = imagecolorallocate($background, 255, 215, 0);
  
    # Calculate size, x and y.
    $error_size = round($size / 1.5);
    $error_size = $error_size - $error_size % $error_blocks;
    $block_size = $error_size / $error_blocks;
  
    $value_size = array($error_size, $error_size);
  
    $value_x = round(imagesx($background)/2 - $value_size[0]/2);
    $value_y = round(imagesy($background)/2 + $value_size[1]/2);
  
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
	imagefill($background, 0, 0, $yellow);
 
    for ($i = 0; $i <= ($error_blocks*$error_blocks)-1; $i++) {
	  $x0 = $value_x + ($i%$error_blocks) * $block_size;
      $y0 = $value_y - $error_size + floor($i/$error_blocks) * $block_size;
      $x1 = $x0 + $block_size;
	  $y1 = $y0 + $block_size;
	  	
      if ($i == 21 || $i == 23  || ($i >= 29 && $i <= 33) || $i == 37 || $i == 38 || $i == 40 | $i == 42 || $i ==43 || ($i >= 47 && $i <= 51) || $i == 57 || $i == 59 || $i == 65 || $i == 66 || $i == 68 || $i == 69 || $i == $left_hand || $i == $right_hand) {
        imagepolygon($background, array($x0, $y0, $x0, $y1, $x1, $y1, $x1, $y0), 4, $black);
	    imagefill($background, $x0+1, $y0+1, $black);
      }
    }
  }
}

# --------------------------------------------------------------------
# Output
# --------------------------------------------------------------------

header("Content-type: image/jpeg");
header("Content-Disposition: filename=" . $image);
imagejpeg($background);

# --------------------------------------------------------------------
# Clean
# --------------------------------------------------------------------
 
imagedestroy($background);

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
