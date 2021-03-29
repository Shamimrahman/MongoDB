const mongoose=require("mongoose")

//mongodb connction and db create nodedata
mongoose.connect("mongodb://localhost:27017/nodedata",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>

    console.log("Connection Successful")
).catch((err)=>console.log(err)

//then r catch part ai hoilo promise
)

//mongodb connction and db create nodedata END

//schema start -> 
//scehma holo field er val ki type hbe ta define korar nam ai

const playListSchema= new mongoose.Schema({
    name:{
        //must be string hoite hobe

        type:String,
        required:true
    },
    type:String,
    video:Number,
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

const createdoc= async ()=>{
    try{
        const react=new Playlist({
            name:"React",
            type:"Fronted",
            video:18,
            active:false,
        
        })

        const node=new Playlist({
            name:"Node",
            type:"Backend",
            video:16,
            active:false,
        
        })

        const express=new Playlist({
            name:"Express",
            type:"Backend",
            video:26,
            active:false,
        
        })

        const mongo=new Playlist({
            name:"Mongodb",
            type:"Backend",
            video:56,
            active:false,
        
        })

        const php=new Playlist({
            name:"PHP",
            type:"Backend",
            video:76,
            active:true,
        
        })

    const result=await Playlist.insertMany([react,express,mongo,node,php])

     console.log(result)
        
    } catch(err){
        console.log(err)
        
    }
}

//createdoc()

//insert end

//CRUD OPERATION

const getDocument=async ()=>{

    //const result=await Playlist.find()

    //read the frontend item
    //const result=await Playlist.find({type:"Fronted"})

    //amar just frontend course er nam lagbe and first fronted er nam
     /*const result=await Playlist
    .find({type:"Fronted"})
    .select({name:1})
    .limit(1)
     */
      
    //********comarison operator Start **********
  
    const comres= await Playlist
    
    // jeisob video 50+ or 50 tader nam show koro

    //.find({video: {$gte:50}})
   // .select({name:1})
 
   // jeisob video 50 er niche or 50 tader nam show koro

   //.find({video:{$lte:50}})
   //.select({name:1})

    //jei sob course database er under a backeend tader pawar jonno

   //.find({type:{$in:["Backend","Database"]}})
   //na thakle $nin use hobe
   //.select({name:1})

 //********comarison operator end ************





    //console.log(result)
    //console.log(comres)


}

getDocument()


