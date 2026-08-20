$ts = '1787268722'
$files = @('chairs.html','dining.html','beds-sofas.html','upholstery.html','wood-paper-laminated.html','wood-solid-veneer.html','relaxing-chairs.html')
foreach($f in $files) {
  $c = Get-Content $f -Raw
  $c = $c -replace 'modal\.js[^>]*>\s*</script>', 'modal.js?v='+$ts+'\"></script>'
  Set-Content $f $c -Encoding UTF8
  Write-Host ""
}
Write-Host "Done v=1787268722"
