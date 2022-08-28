
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Github API</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <form method="post" id="git-api-form">
        <h1 class="form-title">Get Github User Profile</h1>
        <input type="text" name="username" placeholder="Enter user name">
        <button>Submit</button>
    </form>

    <div class="autor-profile-container">

    </div>
    <div class="github-repositories"></div>
    <script src="api.js"></script>
</body>
</html>

<?php
/**
 * Fetch github reposes by user name.
 */
// if (!empty($_POST["username"])) {
//     $user= $_POST["username"];
//     $ch = curl_init();
//     curl_setopt($ch, CURLOPT_URL, "https://api.github.com/users/{$user}/repos?type=public");

//     curl_setopt($ch, CURLOPT_USERAGENT, 'code-with-mehedi');
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//     curl_setopt($ch, CURLOPT_HEADER, 0);
//     $output = curl_exec($ch);
//     curl_close($ch);
//     echo "<pre>";
//     $results=json_decode($output,true);
//     $results= array_column($results, 'name');
//     print_r($results);

//     echo "</pre>";
// }