const Course = ({course}) => {
console.log('Course is: ', course)

    return(
        <>
       <div>
        <h1>{course.name}</h1>      
            {course.parts.map(c => 
                <p key={c.id}>
                    {c.name} {c.exercises}
                </p>
            )}
       </div>
       </>
    )
}

export default Course