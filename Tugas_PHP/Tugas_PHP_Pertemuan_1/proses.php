<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.php");
    exit;
}

$nama  = htmlspecialchars(trim($_POST["nama"]));
$email = htmlspecialchars(trim($_POST["email"]));
$nilai = (int) $_POST["nilai"];

if ($nilai > 70) {
    $status = "Lulus";
    $warna  = "#28a745"; // hijau
} else {
    $status = "Remedial";
    $warna  = "#dc3545"; // merah
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Hasil Ujian</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 500px; margin: 50px auto; padding: 20px; }
        .card { border: 1px solid #ddd; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .status { display: inline-block; padding: 8px 16px; color: white; border-radius: 4px; font-weight: bold; background: <?= $warna ?>; }
        p { margin: 10px 0; }
        a { display: inline-block; margin-top: 20px; color: #007bff; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="card">
        <h2>Hasil Ujian</h2>
        <p><strong>Nama:</strong> <?= $nama ?></p>
        <p><strong>Email:</strong> <?= $email ?></p>
        <p><strong>Nilai:</strong> <?= $nilai ?></p>
        <p><strong>Status:</strong> <span class="status"><?= $status ?></span></p>
        <a href="index.php">← Kembali ke Form</a>
    </div>
</body>
</html>
