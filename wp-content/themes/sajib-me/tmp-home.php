<?php
/**
 * Template Name: Rest API  
 * 
 */
// get_header();

$path = get_template_directory_uri();
if($_SERVER['SERVER_NAME'] == 'sajib.com' ){
    $path = 'http://sajib.com';
}
?> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sajib Talukder | A WordPress Enthusiast | Blog</title>
    <link rel="stylesheet" type="text/css" href="<?php echo $path; ?>/_react/css/style.css">
</head>
<body>
    <div id="__react_sajib_me"></div>
    <script src="<?php echo $path; ?>/_react/js/script.js"></script>
</body>
</html>
