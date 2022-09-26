const ex = require("express");
const Course = require("../models/course");
const router = ex.Router();

// get all courses
router.get("/allcourses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch(err) {
    res.json(err);
  }
});

// add a course

 router.post("/addcourse",async(req,res) => {
    try{
      const course= await Course.create(req.body);
      res.json(course);
    } catch (err) {
        res.json(err)
    }
 })

 //delete a course

 router.delete('/delete/:courseid',async(req,res) => {
    try{
        await Course.remove({_id:req.params.courseid});
        res.status(200).json({
            message:"deleted successfully"
        })
      
    } catch (err) {
        res.json(err)
    }
 });

 //update course by id

 router.put('/update/:courseid',async(req,res) => {
    try{
       const course = await Course.updateOne({_id:req.params.courseid}, req.body);
       res.json(course);
      
    } catch (err) {
        res.json(err);
    }
 });

module.exports = router;