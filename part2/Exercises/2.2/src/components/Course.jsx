const Course = ({course}) => {
console.log('Course is: ', course)

const sumaTotal = course.parts.reduce((total, part) => {
    return total + part.exercises
}, 0)


    return(
        <>
       <div>
        <h1>{course.name}</h1>      
            {course.parts.map(c => 
                <p key={c.id}>
                    {c.name} {c.exercises}
                </p>
            )}
        <p> <strong>total of {sumaTotal} exercises</strong> </p>
       </div>
       </>
    )
}

export default Course