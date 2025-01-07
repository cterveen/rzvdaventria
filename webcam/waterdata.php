<?php 

# --------------------------------------------------------------------
# Description
#
# waterdata.php - show a water data icon or error image
# --------------------------------------------------------------------

# --------------------------------------------------------------------
# Configuration
# --------------------------------------------------------------------

# Basedir
$data_file = './data/ijsselpeil_deventer.json';

# Size (px)
$size = 80;

# Font
$font = "../themes/rzvdaventria/fonts/Lato/Lato-Black.ttf";


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
# Get and validate the data
# --------------------------------------------------------------------

if (time() > strtotime($data->{"actueel"}->{"expires"})) {
  $error = 1;
}

# --------------------------------------------------------------------
# Make the image canvas
# --------------------------------------------------------------------

$img = imagecreate($size, $size);
$black = imagecolorallocate($img, 0, 0, 0);
$yellow = imagecolorallocate($img, 255, 215, 0);
$red = imagecolorallocate($img, 255, 20, 0);

imagefill($img, 0, 0, $black);

# --------------------------------------------------------------------
# Show the image or an error image
# --------------------------------------------------------------------

if ($error == 0) {
  # Make the image
  $filename = $meassure . "ijsselpeil_deventer.jpg";

  # Define color
  $color = $yellow;
  if ($data->{"actueel"}->{"caption"} != "") {
    $color = $red;
  }

  # Draw value
  $unit_size = getSize($unit_fontsize, $font, " " . $data->{"unit"});
  $value_size = getSize($value_fontsize, $font, $data->{"actueel"}->{"waarde"});
  $value_x = imagesx($img)/2 - ($value_size[0] + $unit_size[0])/2;
  $value_y = imagesy($img)/2 + $value_size[1]/2;
  imagettftext($img, $value_fontsize, 0, $value_x, $value_y, $color, $font, str_replace(".", ",", $data->{"actueel"}->{"waarde"}));

  # Draw unit
  $unit_x = $value_x + $value_size[0];
  $unit_y = imagesy($img)/2 - $value_size[1]/2 + $unit_size[1];
  imagettftext($img, $unit_fontsize, 0, $unit_x, $unit_y, $color, $font, " " . $data->{"unit"});

  # Draw caption
  $time_size = getSize($time_fontsize, $font, $data->{"actueel"}->{"caption"});
  $time_x = imagesx($img) / 2 - $time_size[0] / 2;
  $time_y = imagesy($img) - 10;
  imagettftext($img, $time_fontsize, 0, $time_x, $time_y, $color, $font, $data->{"actueel"}->{"caption"});
}
else {
  # Make an error image
  $value = $data->{$meassure};
  $filename = $meassure . ".jpg";
  $error_strings = [
    "000000111101110000010001101010011010",
    "000010010000001110001110101010111010",
    "000010101101111111110001001010000110",
    "000011000100000001010101100000110000",
    "000011100100101011101111011101100111",
    "000011111100011011101111000111111010",
    "000100110111001000000000011101101101",
    "000101000000010100001100110001111100",
    "000101111000010000101001000101010000",
    "000111100100010111100110101100001110",
    "001011010000110111111000101001000010",
    "001011010011001100100011001000010101",
    "001011101011001110000100110101011100",
    "010000001011100100001010010011010011",
    "010001010110000000100111001101110111",
    "010011001011010000010101100110110101",
    "010011011010010000111100000010001100",
    "010011101110001001101101010100111010",
    "010100000100010111110001001111100000",
    "011000000110011110100000000010101100",
    "011001011111010101110111000110000001",
    "011110100110010010011011010101001000",
    "100011010100010111000111000011001010",
    "100101000110111000110101001100110111",
    "100101011001001101100000111100011011",
    "100101110011100111000010010011011101",
    "100110011100111011111111001001000011",
    "101000011011101101000111100010010010",
    "101001101101111010101010000100101101",
    "101101101000000000111001001010011100",
    "110100011000100001110110011110000010",
    "111111011101111011001101011000101101",
  ];

  $error_string = $error_strings[rand(0,array_key_last($error_strings))];

  # Calculate size, x and y.
  $error_size = 24;
  $block_size = 4;

  $value_size = array($error_size, $error_size);
  $unit_size = getSize($unit_fontsize, $font, " " . $data->{"actueel"}->{"unit"});

  $value_x = imagesx($img)/2 - ($value_size[0] + $unit_size[0])/2;
  $value_y = imagesy($img)/2 + $value_size[1]/2;

  # Draw the value
  for ($i = 0; $i <= 35; $i++) {
    $x0 = $value_x + ($i%6) * $block_size;
    $y0 = $value_y - $error_size + floor($i/6) * $block_size;
    $x1 = $x0 + $block_size;
    $y1 = $y0 + $block_size;

    if (substr($error_string, $i, 1) == 1) {
      imagepolygon($img, array($x0, $y0, $x0, $y1, $x1, $y1, $x1, $y0), 4, $yellow);
      imagefill($img, $x0+1, $y0+1, $yellow); 
    }
  }

  # Draw unit
  $unit_x = $value_x + $value_size[0];
  $unit_y = imagesy($img)/2 - $value_size[1]/2 + $unit_size[1];
  imagettftext($img, $unit_fontsize, 0, $unit_x, $unit_y, $yellow, $font, " " . $data->{"actueel"}->{"unit"});
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
