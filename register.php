<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="tailwind.css">
    <link rel="stylesheet" href="register.css">
    <title>Ventura - register</title>
</head>
<body>
<form class="login-form" action="javascript:void(0);">
    <h1>Register</h1>
    <div class="form-field">
        <i class="fas fa-user"></i>
        <input type="text" name="username" id="username" class="form-field" pattern="^[a-zA-Z0-9_-]{1,16}$" placeholder=" " required>
        <label for="username">Username</label>
    </div>
    <div class="form-field">
        <i class="fas fa-user"></i>
        <input type="text" name="username" id="username" class="form-field" pattern="^[a-zA-Z0-9_-]{1,16}$" placeholder=" " required>
        <label for="username">Social Club</label>
    </div>
    <div class="form-field">
        <i class="fas fa-user"></i>
        <input type="text" name="username" id="username" class="form-field" pattern="^[a-zA-Z0-9_-]{1,16}$" placeholder=" " required>
        <label for="username">mail</label>
    </div>
    <div class="form-field">
        <i class="fas fa-lock"></i>
        <input type="password" name="password" id="password" class="form-field" placeholder=" " required>
        <label for="password">Password</label>
    </div>
  <button type="submit" value="Login" class="btn">Register</button>
</form>
<form class="login-form" action="javascript:void(0);">
<h1>Login</h1>
<div class="form-field">
        <i class="fas fa-user"></i>
        <input type="text" name="username" id="username" class="form-field" pattern="^[a-zA-Z0-9_-]{1,16}$" placeholder=" " required>
        <label for="username">Username</label>
    </div>
<div class="form-field">
        <i class="fas fa-lock"></i>
        <input type="password" name="password" id="password" class="form-field" placeholder=" " required>
        <label for="password">Password</label>
    </div>
    <button type="submit" value="Login" class="btn">Connexion</button>
</form>
</body>
</html>