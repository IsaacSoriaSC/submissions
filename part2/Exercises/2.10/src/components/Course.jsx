const Course = ({course}) => {
console.log('Course is: ', course)

    return(
        <>
       <div> 
        <h1>Web development curriculum</h1>
            {course.map(c => 
            <div key={c.id}>
                {console.log('Looking inside C: ', c)}
                <h2> {c.name} </h2>
               
                {c.parts.map(d => 
                  <div key={d.id}>
                    {console.log('Looking inside D: ', d)}
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