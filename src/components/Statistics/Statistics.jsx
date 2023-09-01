export function Statistics ({title, stats}){
    return (
        <section>
        {title && <h2>{title}</h2>}
      
        <ul>
          {stats.map(stat => {
            return(
                <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
            )
          })}
        </ul>
      </section>   
    )
};