<?php 
$image = $_GET['image'];
$overlay = '../webcam_overlay.png';
$offline = '../webcam_offline.jpg';

$dir = './data/';

$image = str_replace(array("/", ".."), "", $image); // Prevent abuse

$debug = 0;

if ($debug) { echo "Load: " . $image . "<br>\n"; }


// update webcam_jachthaven.jpg
if ($image == "webcam_jachthaven.jpg") {
  // first fix the alarmcam filenames
  $files = array();
  $dh = opendir($dir);
  while ($file = readdir($dh)) {
    if ($debug) { echo "Found file: " . $file . "<br>\n"; }
    if (substr($file, 0, 5) == "alarm") {
      if ($debug) { echo "Push file: " . $file . "<br>\n"; }
      array_push($files, $file);
    }
  }
  closedir($dh);

  if (count($files) > 0) {
    // rename last to webcam_jachthaven.jpg
    sort($files);
    $last = array_pop($files);
  
    $age = time() - filemtime($dir.$file);
  
    // wait 5 seconds to prevent partial images
    if ($age > 5) {
      rename($dir . $last, $dir . "webcam_jachthaven.jpg");

      // remove others
      foreach ($files as $file) {
        if (file_exists($dir.$file)) {
          unlink($dir . $file);
        }
      }
    }
  }
}

// get image
if ($image == NULL) $image = $offline;
if (file_exists($dir . $image))
{
	if ($debug) { echo "Size: " . filesize($dir.$image) . "<br>\n"; }
	
	if (! filesize($dir.$image) > 0 )
	   $image = $offline;
	
	$diff = (time() - filectime($dir.$image))/60/60; //Time in hours
 	if ($diff > 1) 
 		$image = $offline;
 		
	if ($debug) { echo "Age: " . $diff . " hours<br>\n"; }
}
else if ($image != $offline) {
  $image = $offline;
}


if (!file_exists($dir . $image))
  die("Image does not exist.");

$extension = strtolower(substr($image, strrpos($image, ".") + 1));
 
// Load image from file
switch ($extension)
{
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

if ($background == FALSE) $image = $offline;

if($image != $offline)
{
	$swidth = imagesx($background);
	$sheight = imagesy($background);
 
	imagealphablending($background, true);
	$overlay = imagecreatefrompng($dir . $overlay);
 
	// Get the size of overlay
	$owidth = imagesx($overlay);
	$oheight = imagesy($overlay);
 
	// Set offset from bottom-right corner
	//$w_offset = ( $swidth / 2 ) - ( $owidth / 2 );
	//$h_offset = ( $sheight / 2 ) - ( $oheight / 2 );
	$w_offset = $swidth - $owidth - 10;
	$h_offset = 10;
	
	// Overlay watermark
	imagecopy($background, $overlay, $swidth - $owidth - $w_offset, $sheight - $oheight - $h_offset, 0, 0, $owidth, $oheight);
}
//ImageCopyMerge($background, $overlay, $swidth - $owidth - $w_offset, $sheight - $oheight - $h_offset, 0, 0, $owidth, $oheight, 50);

// Output header and final image
header("Content-type: image/jpeg");
header("Content-Disposition: filename=" . $image);
imagejpeg($background);
 
// Destroy the images
imagedestroy($background);
if ($image != $offline) {
  imagedestroy($overlay);
}

?>
