function Get-Factorial {
    param (
        [int]$number
    )

    $factorial = 1
    for ($i = 1; $i -le $number; $i++) {
        $factorial *= $i
    }

    return $factorial
}

$number = 5
$factorial = Get-Factorial -number $number
Write-Output "The factorial of $number is $factorial"