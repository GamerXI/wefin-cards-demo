import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { MdInfo } from "react-icons/md";
import Divider from '@mui/joy/Divider';
import '../style/style.css';

function formatCompactNumber(number) {
    if (number < 1000) {
      return number;
    } else if (number >= 1000 && number < 1_000_000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
      return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
      return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "T";
    }
}
export default function CardComponent(props) {
    return (
        <Box
            sx={{
                width: '90%',
                position: 'relative',
                marginLeft: '10rem'
            }}
        >
            {/* <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          bgcolor: 'warning.300',
          left: '500px',
          top: '-24px',
          bottom: '-24px',
          '&::before': {
            top: '4px',
            content: '"vertical"',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            content: '"horizontal"',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
        }}
      /> */}
            <Card
                orientation="horizontal"
                sx={{
                    width: '80%',
                    border: "none",
                    boxShadow: "none",
                    flexWrap: 'wrap',
                    [`& > *`]: {
                        '--stack-point': '500px',
                        minWidth:
                            'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                    },
                    // make the card resizable for demo
                }}
            >
                <Sheet
                    sx={{
                        bgcolor: 'background.level1',
                        borderRadius: 'sm',
                        p: 1.5,
                        my: 1.5,
                        display: 'flex',
                        gap: 2,
                        '& > div': { flex: 1 },
                    }}
                >
                    <AspectRatio flex ratio="1" maxHeight={220} sx={{ minWidth: 350 }}>
                        <img
                            src={props.data.card_image__c}
                            alt="card"
                            srcSet=""
                            loading="lazy"
                        />
                    </AspectRatio>
                </Sheet>
                <CardContent>
                    <div style={{ 'display': 'flex', justifyContent: 'space-between' }}>
                        <Typography  
                            style={{
                                color: '#2e0080',
                                fontSize: '22px',
                                fontWeight: '600'
                            }}
                        >
                            {props.data.card_name__c}
                        </Typography>
                        <Button style={{backgroundColor:'initial',color:'#5200bb',border: '0'}}>
                            {/* <FontAwesomeIcon icon={faCirclePlus} size="xl" style={{ color: "#ab92f7" }} />&nbsp;&nbsp;Compare */}
                            <img src="https://app.wefin.in/static/media/plusIcon.510b4141.svg" />Compare
                        </Button>
                    </div>
                    <Typography 
                        style={{
                            fontSize: '16px',
                            maxWidth: '520px',
                            borderBottom: '1px solid #f0f0f0',
                            paddingBottom: '15px',
                            color: '#000',
                        }}
                    >
                        {props.data.card_description__c}
                    </Typography>
                    <Divider sx={{ width: '60%' }} />
                    <Sheet
                        sx={{
                            p: 1.5,
                            my: 1.5,
                            display: 'flex',
                            gap: 2,
                            '& > div': { flex: 1 },
                        }}
                    >
                        <div 
                           
                        >
                            <Typography  
                                style={{
                                    color: '#c9c9c9',
                                    fontSize: '13.5px'
                                }}
                            >
                                1st Year Fees <MdInfo size="15px" />
                            </Typography>
                            <Typography fontWeight="lg">₹ {props.data.joining_fee_amount__c}</Typography>
                        </div>
                        <div>
                            <Typography 
                                style={{
                                    color: '#c9c9c9',
                                    fontSize: '13.5px'
                                }}
                            >
                                Best Suited for <MdInfo />
                            </Typography>
                            {/* <Typography fontWeight="sm"> <img style={{height:'20px',width:'20px'}} src={props.data.bestSuited[0].image} /> {props.data.bestSuited[0].name}</Typography> */}
                            <div className='bestsuited_div'>
                                {props.data.bestSuited.map((item,index) => {
                                    return (
                                        <div key={index} className='bestsuited_icon'>
                                            <img style={{ height: '20px', width: '20px', marginRight: '5px' }} src={item.image} alt={item.name} />
                                            <span>{item.name}</span>
                                        </div>
                                    );
                                    // return <Typography key={index} fontWeight="sm"> <img style={{height:'20px',width:'20px'}} src={item.image} /> {item.name}</Typography>
                                })}
                            </div>
                            {/* <Typography fontWeight="lg">{}</Typography> */}
                        </div>
                        <div>
                            <Typography 
                                style={{
                                    color: '#c9c9c9',
                                    fontSize: '13.5px'
                                }}
                            >
                                Qualifying Criteria <MdInfo />
                            </Typography>
                            <Typography fontWeight="sm">Age: {props.data.age__c} Y min <b>|</b> Monthly income: {formatCompactNumber(props.data.monthly_income__c)} above</Typography>
                        </div>
                    </Sheet>
                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: "start" }}>
                        <Button style={{backgroundColor:'initial',color:'#5200bb',border: '0'}}>
                            <img src="https://app.wefin.in/static/media/plusIcon.510b4141.svg" />&nbsp;Know More
                        </Button>
                        <Button variant="solid" style={{backgroundColor: "#5200bb",}}>
                            Apply Now
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
