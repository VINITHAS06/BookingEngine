const mongoose=require('mongoose');

const roomTypeMasterSchema=new mongoose.Schema({

    PropertyId:{
        type: Number,
        required:true
        
    },
    
    roomType:{
       type: String,
       required:true
    },

    roomImage:{
       type: String,
       required: true
    },
    
    description:{
      type:String,
      required:true
    },

    numberofRooms:{
         type: Number,
        required:true

    },

    availability:{
        type: Number,
       required:true

   }
})

module.exports=roomTypeMaster=mongoose.model('roomTypeMaster',roomTypeMasterSchema);