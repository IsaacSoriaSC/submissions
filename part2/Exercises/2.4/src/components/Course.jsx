const Course = ({course}) => {
console.log('Course is: ', course)

const sumaTotal = course[0].parts.reduce((total, part) => {
    return total + part.exercises
}, 0)


    return(
        <>
       <div> 
        <h1>Web development curriculum</h1>
            {course.map(c => 
            <div key={c.id}>
                
                <h2> {c.name} </h2>
               
                {c.parts.map(d => 
                  <div key={d.id}>
                    <p> {d.name} {d.exercises} </p>
                  </div>
                )}

                <p>
                  <strong> total of {c.parts.reduce((total, part) => {
                           return total + part.exercises},0)} exercises 
                  </strong>
                </p>

            </div>
            )}
       </div>
       </>
    )
}

export default Course