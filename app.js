const geocode = require('./utils/geocode');
const forsast = require('./utils/forcast');

const loc = process.argv[2];

if(!loc){
    console.log("Please Provide a location..!")
}else{
    geocode(loc, (error, data)=>{

        if(error){
            return error;
        }
        console.log("Location:");
        console.log('data', data);
        
        forsast(loc, (Error, Data)=>{
            if(Error){
                return Error;
            }
            console.log("Weather Report:")
            console.log('data', Data);
        })
    })
    
}