'use client'

import { Dialog, DialogContent, DialogTitle, Grid, Modal } from '@mui/material'
import { ImageViewType } from '../../../[id]/page'
import wonderImages from '@/app/photo-feed/image-map'
import { AspectRatio } from '@mui/joy'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ExtendedImageView({ params: { id } }: ImageViewType) {
    const router = useRouter()
    const image = wonderImages.find(wonder => wonder.id === id)

    return (
        <Grid>
            <Dialog
                open
                onClose={() => router.push('/photo-feed')}
            >
                {
                    !image ? (
                        <DialogTitle>
                            Photo not found
                        </DialogTitle>
                    ) : (
                        <DialogContent>
                            <DialogTitle>
                                {image.name}
                            </DialogTitle>
                            <AspectRatio
                                ratio={4 / 3}
                                sx={{
                                    width: '26rem'
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.name}
                                />
                            </AspectRatio>
                            <DialogTitle>
                                {image.location}
                            </DialogTitle>
                            <DialogTitle>
                                {image.description}
                            </DialogTitle>
                        </DialogContent>
                    )
                }
            </Dialog>
        </Grid>
    )
}