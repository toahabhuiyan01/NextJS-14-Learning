import { Grid, Typography } from '@mui/material'
import wonderImages from './image-map'
import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@mui/joy'

export default function PhotoFeed() {
    return (
        <Grid>
            <Typography variant="h1">
                New Wonder of world
            </Typography>

            <Grid
                container
                gap={2}
            >
                {
                    wonderImages.map((wonder, index) => (
                        <Link
                            href={`/photo-feed/${wonder.id}`} 
                            key={index}
                            style={{
                                cursor: 'pointer'
                            }}
                        >
                            <AspectRatio
                                ratio={4/3}
                                sx={{
                                    width: '25rem'
                                }}
                            >
                                <Image
                                    src={wonder.src}
                                    alt={wonder.name}
                                />
                            </AspectRatio>
                        </Link>
                    ))
                }
            </Grid>
        </Grid>
    )
}