import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/button';
import Typography from '@mui/material/Typography';


const Projects = () => {
    return (
        <div className='flex flex-wrap justify-around m-1 mt-5 p-1 bg-[#13141b] md:mt-20 rounded-2xl'>
            <h1 className='text-6xl md:text-8xl font-bold p-1
             md:p-2 md:m-4 m-2 text-white' id='Projects'>Projects</h1>
            <div className='flex flex-wrap md:flex-nowrap md:overflow-x-auto md:space-x-4 p-2 '>

                <Card sx={{
                    maxWidth: 300, backgroundColor: '#2d3146',
                    color: 'white', flexShrink: 0 ,minWidth: 300
                }} className='mt-3 md:mt-2 mx-3' >
                    <CardMedia
                        sx={{ height: 200 }}
                        image="/public/weatherApp.jpeg"
                        title="img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather Forecast Web App
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="ul" >
                            <ul className='text-white'>
                                <li>Built a responsive weather web app that fetches and
                                    displays real-time city-based weather data.</li>
                                <li>Shows temperature, feels-like, humidity, and
                                    min/max temperature details.</li>
                                <li>Integrated dynamic visuals and background effects based
                                    on weather conditions.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="https://weather-app-dzwt.vercel.app/">
                            <button className='text-lg border-2 p-1 bg-white text-[#2d3146]
                             font-bold rounded-full'  >Demo</button>
                        </a>

                    </CardActions>
                </Card>


                <Card sx={{
                    maxWidth: 300, backgroundColor: '#2d3146',
                    color: 'white', flexShrink: 0 ,minWidth: 300
                }} className='mt-3 md:mt-2 mx-3'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image="/public/ecommerec.jpeg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            E-Commerce Web App
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="ul">
                            <ul className='text-white'>
                                <li>Built an interactive product-based web application with
                                    search functionality and a clean, card-based product layout.</li>
                                <li>Implemented product details, real-time price updates, and order 
                                    placement functionality.</li>
                                    <li>
                                        Developed a product web app with search, dynamic pricing, 
                                        and quantity-based calculations.
                                    </li>
                                
                            </ul>
                        </Typography>
                    </CardContent>
                    <CardActions>
                         <a href="https://e-commerce-beta-orpin.vercel.app/">
                            <button className='text-lg border-2 p-1 bg-white text-[#2d3146]
                             font-bold rounded-full'  >Demo</button>
                        </a>
                    </CardActions>
                </Card>


                <Card sx={{
                    maxWidth: 300, backgroundColor: '#2d3146',
                    color: 'white', flexShrink: 0 ,minWidth: 300
                }}
                    className='mt-3 md:mt-2 mx-3'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image="/public/quizApp.jpeg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Quiz Web App
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="ul">
                           <ul className='text-white'>
                            <li>Developed an MCQ-based quiz application with sequential
                                 questions and multiple-choice options.</li>
                            <li>Added real-time feedback and score tracking for each question and also
                                show the results of all MCQ.</li>
                            <li>Created a  page which show the correct answer of all questions 
                                 and review functionality.</li>
                           </ul>
                        </Typography>
                    </CardContent>
                    <CardActions>
                         <a href="https://quiz-app-mz.vercel.app/">
                            <button className='text-lg border-2 p-1 bg-white text-[#2d3146]
                             font-bold rounded-full' >Demo</button>
                        </a>
                    </CardActions>
                </Card>

                <Card sx={{
                    maxWidth: 300, backgroundColor: '#2d3146',
                    color: 'white', flexShrink: 0 ,minWidth: 300
                }} className='mt-3 md:mt-2 mx-3'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image="/public/pass.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Random Password Genetator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="ul">
                           <ul className='text-white'>
                            <li>Developed a random password generator web 
                                app with customizable options for length, numbers, and special characters.</li>
                            <li>Implemented real-time password generation with multiple variations.</li>
                            <li>Added a copy-to-clipboard feature for user convenience.</li>
                           </ul>
                        </Typography>
                    </CardContent>
                    <CardActions>
                         <a href="https://password-generator-tan-alpha.vercel.app/">
                            <button className='text-lg border-2 p-1 bg-white text-[#2d3146]
                             font-bold rounded-full'  >Demo</button>
                        </a>
                    </CardActions>
                </Card>
                 <Card sx={{
                    maxWidth: 300, backgroundColor: '#2d3146',
                    color: 'white', flexShrink: 0 ,minWidth: 300
                }} className='mt-3 md:mt-2 mx-3'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image="/public/calculator.jpeg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Simple Calculator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="ul">
                           <ul className='text-white'>
                            <li>Built a responsive calculator using HTML, CSS, and JavaScript..</li>
                            <li>Implemented core arithmetic operations with real-time results..</li>
                            <li>Improved JavaScript logic and DOM manipulation skills</li>
                            <li>Prefrom simple calculation fastly and very accurately</li>
                           </ul>
                        </Typography>
                    </CardContent>
                    <CardActions>
                         <a href="https://simple-calculator-gold-delta.vercel.app/">
                            <button className='text-lg border-2 p-1 bg-white text-[#2d3146]
                             font-bold rounded-full'  >Demo</button>
                        </a>
                    </CardActions>
                </Card>


            </div>

        </div>
    )
}

export default Projects
