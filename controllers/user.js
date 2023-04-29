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
    db.query("Select (select count(*) from posts where userid=?) as pno, (select count(*) from comments where userid=?) as cno" ,[currentUser, currentUser], (err, data) => {
        if(err) return res.status(500).json(err);
        // console.log(data);
        return res.status(200).json(data);
    })
}