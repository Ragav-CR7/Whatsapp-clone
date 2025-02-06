function Get-Factorial {
    $number = 5
    $factorial = 1
    for ($i = 1; $i -le $number; $i++) {
        $factorial *= $i
    }
    return $factorial
}

$factorial = Get-Factorial
Write-Output "The factorial of 5 is $factorial"
