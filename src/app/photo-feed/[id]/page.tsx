import { Grid, Typography } from '@mui/material'
import wonderImages from '../image-map'
import { AspectRatio } from '@mui/joy'
import Image from 'next/image'

export type ImageViewType = {
    params: {
        id: string
    }
}


export default function ImageView({ params: { id } }: ImageViewType) {
    const photo = wonderImages.find(wonder => wonder.id === id)!

    if(!photo) {
        return (
            <Grid>
                <Typography variant="h1">
                    Photo not found
                </Typography>
            </Grid>
        )
    }

    return (
        <Grid
            container
            gap={2}
            direction='column'
        >
            <Grid>
                <Typography variant="h3">
                    {photo.name}
                </Typography>
            </Grid>

            <Grid>
                <AspectRatio
                    ratio={4/3}
                    sx={{
                        width: '40rem'
                    }}
                >
                    <Image
                        src={photo.src}
                        alt={photo.name}
                    />
                </AspectRatio>
                <Typography variant="body2">
                    {photo.location}
                </Typography>
            </Grid>

            <Typography variant="body1">
                {photo.description}
            </Typography>
        </Grid>
    )
}