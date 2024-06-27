import { Typography } from "@mui/material"

export const MuiTypograhy = () => {
  return (
    <div>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4" component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant="h5">h5 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>

        <Typography variant="subtitle1">SubTitle 1</Typography>
        <Typography variant="subtitle2">SubTitle 2</Typography>

        <Typography variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis 
        hic eius perspiciatis et exercitationem iste, corporis ab nisi recusandae saepe, veritatis 
        cupiditate quia similique nesciunt! Inventore optio culpa aspernatur error.</Typography>

        <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic 
        eius perspiciatis et exercitationem iste, corporis ab nisi recusandae saepe, veritatis cupiditate 
        quia similique nesciunt! Inventore optio culpa aspernatur error.</Typography>
    </div>
  )
}
