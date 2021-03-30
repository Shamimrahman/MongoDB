const mongoose=require("mongoose")

//mongodb connction and db create nodedata
mongoose.connect("mongodb://localhost:27017/validationdata",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>

    console.log("Connection Successful")
).catch((err)=>console.log(err)

//then r catch part ai hoilo promise
)

//mongodb connction and db create nodedata END

//***** Validation *********
//schema start -> 
//scehma holo field er val ki type hbe ta define korar nam ai

const playListSchema= new mongoose.Schema({
    name:{
        //must be string hoite hobe
        //validation
        type:String,
        required:true,
        //unique:true,
        lowercase:true,
        //extra space bad dewar jonno
        trim:true,
        minlength:[2,"Min two Letters"],
        maxlength:30
    },
    ctype:{
        type:String,
        enum:["Frontend" ,"Backend", "Database"]
    },
    video:{
        type:Number
    },
    author:{
        type:String,
        required:true,
        uppercase:true

    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
    
})

//Schema ENd
//MODEL

//simply create collection

//modal is wrapper of schema and create interface
//modal crerate kora mane collection create kora 
//and collection create a schema jabe
const Playlist=new mongoose.model("Data",playListSchema)

//create collection end

//add data or insert data of Data



//create a particular document start 

//use async cz promise er theke asunc better

const adddoc=async ()=>{
    try{

        const react=new Playlist({
            name:"Nodejs   ",
            ctype:"Backend",
            video:122,
            author:"Shamim",
            active:true

        })

        const result= await Playlist.insertMany([react])

        console.log(result)



    }

    catch(err){
        console.log(err)
    }

}

adddoc()

