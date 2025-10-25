"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PhotoUploadProps {
  onPhotosChange: (photos: File[]) => void
  maxPhotos?: number
  minPhotos?: number
}

export function PhotoUpload({ 
  onPhotosChange, 
  maxPhotos = 10, 
  minPhotos = 3 
}: PhotoUploadProps) {
  const [photos, setPhotos] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newPhotos = [...photos, ...acceptedFiles].slice(0, maxPhotos)
    setPhotos(newPhotos)
    onPhotosChange(newPhotos)

    // Generate previews
    const newPreviews = acceptedFiles.map(file => URL.createObjectURL(file))
    setPreviews(prev => [...prev, ...newPreviews].slice(0, maxPhotos))
  }, [photos, maxPhotos, onPhotosChange])

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index)
    const newPreviews = previews.filter((_, i) => i !== index)
    
    // Revoke object URL to prevent memory leaks
    URL.revokeObjectURL(previews[index])
    
    setPhotos(newPhotos)
    setPreviews(newPreviews)
    onPhotosChange(newPhotos)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: maxPhotos - photos.length,
    disabled: photos.length >= maxPhotos
  })

  const isMinimumMet = photos.length >= minPhotos
  const photosRemaining = maxPhotos - photos.length

  return (
    <div className="space-y-4">
      {/* Upload Zone */}
      {photos.length < maxPhotos && (
        <Card
          {...getRootProps()}
          className={`
            border-2 border-dashed p-4 sm:p-6 lg:p-8 transition-all cursor-pointer
            ${isDragActive 
              ? 'border-primary bg-primary/5' 
              : 'border-border hover:border-primary/50 hover:bg-muted/50'
            }
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <div className={`
              rounded-full p-3 transition-colors
              ${isDragActive ? 'bg-primary/10' : 'bg-muted'}
            `}>
              <Upload className={`w-6 h-6 sm:w-8 sm:h-8 ${isDragActive ? 'text-primary' : 'text-muted-foreground'}`} />
            </div>
            
            <div>
              <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                {isDragActive 
                  ? "Drop foto's hier" 
                  : "Sleep foto's hierheen of klik om te uploaden"
                }
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {minPhotos} tot {maxPhotos} foto's • JPG, PNG, WEBP
              </p>
              {photos.length > 0 && (
                <p className="text-sm text-primary font-medium mt-2">
                  {photosRemaining} foto's over
                </p>
              )}
            </div>
          </div>
        </Card>
      )}

      {/* Photos Grid */}
      {photos.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-foreground">
              Geüploade foto's ({photos.length}/{maxPhotos})
            </p>
            {!isMinimumMet && (
              <p className="text-sm text-muted-foreground">
                Nog {minPhotos - photos.length} foto's minimaal nodig
              </p>
            )}
            {isMinimumMet && (
              <p className="text-sm text-primary font-medium flex items-center gap-1">
                ✓ Minimum bereikt
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {previews.map((preview, index) => (
              <div key={index} className="relative group">
                <Card className="overflow-hidden border-2 border-border hover:border-primary transition-colors">
                  <div className="aspect-square relative bg-muted">
                    <img
                      src={preview}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Remove button */}
                    <Button
                      onClick={() => removePhoto(index)}
                      size="icon"
                      variant="destructive"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                    >
                      <X className="w-4 h-4" />
                    </Button>

                    {/* Photo number */}
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      Foto {index + 1}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      {photos.length === 0 && (
        <Card className="p-3 bg-primary/5 border-primary/20">
          <div className="flex gap-2">
            <ImageIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-xs font-medium text-foreground">
                📸 Tips voor goede foto's:
              </p>
              <ul className="text-xs text-muted-foreground space-y-0.5">
                <li>• Foto van buiten- of binnenkant raam</li>
                <li>• Maak foto's bij goed daglicht</li>
                <li>• Zorg dat het hele raam zichtbaar is</li>
              </ul>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}


