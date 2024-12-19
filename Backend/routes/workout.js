const express = require('express');
const router = express.Router();
const {
    getWorkouts,
    singleWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workout-controller');

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', singleWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// PATCH (update) a workout
router.patch('/:id', updateWorkout);

module.exports = router;
