# PowerShell script for image cropping with approved verb and PSScriptAnalyzer compliance
[Diagnostics.CodeAnalysis.SuppressMessageAttribute('PSUseApprovedVerbs', 'Crop-Image')]
param()

function Invoke-ImageCrop {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$SourcePath,

        [Parameter(Mandatory = $true)]
        [string]$DestinationPath,

        [Parameter(Mandatory = $true)]
        [int]$X,

        [Parameter(Mandatory = $true)]
        [int]$Y,

        [Parameter(Mandatory = $true)]
        [int]$Width,

        [Parameter(Mandatory = $true)]
        [int]$Height
    )

    Add-Type -AssemblyName System.Drawing

    if (-not (Test-Path $SourcePath)) {
        Write-Error "Source image '$SourcePath' not found."
        return
    }

    $sourceImage = [System.Drawing.Image]::FromFile($SourcePath)
    $cropRect = New-Object System.Drawing.Rectangle $X, $Y, $Width, $Height
    $targetBitmap = New-Object System.Drawing.Bitmap $Width, $Height

    $graphics = [System.Drawing.Graphics]::FromImage($targetBitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $destRect = New-Object System.Drawing.Rectangle 0, 0, $Width, $Height
    $graphics.DrawImage($sourceImage, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

    $destDir = Split-Path -Parent $DestinationPath
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }

    $targetBitmap.Save($DestinationPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

    $graphics.Dispose()
    $targetBitmap.Dispose()
    $sourceImage.Dispose()

    Write-Host "Cropped image saved to: $DestinationPath"
}

# Alias for backward compatibility if needed
Set-Alias -Name Crop-Image -Value Invoke-ImageCrop -Scope Script -ErrorAction SilentlyContinue
