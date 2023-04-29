import { db } from '../connect.js';

export const getUser=(req, res)=>{
    res.send("Hello")
}

export const getUserInfo=(req, res) => {
    const currentUser = req.params.user;
    db.query("select * from users_info where username=?", [currentUser], (err, data) => {
        if(err) return res.status(500).json(err);
        // console.log(data);
        return res.status(200).json(data);
    })
}

export const getPostsNumber=(req, res)=>{
    const currentUser = req.params.user;
    var username;
    db.promise().query("select username from users where id=?" ,[currentUser], (err, data) => {
        if(err) return res.status(500).json(err);
    //   username =data[0][0].username;
    //   console.log(username);
        // return res.status(200).json(data);
    }).then((data)=>{
        //  console.log(data[0][0].username);
         db.query("Select (select count(*) from posts where userid=?) as pno, (select count(*) from comments where userid=?) as cno,(select bio from users_info where username=?) as bio" ,[currentUser, currentUser,data[0][0].username], (err, data) => {
            if(err) return res.status(500).json(err);
           // console.log(data);
           
            return res.status(200).json(data);
        })
    })
   
 
}