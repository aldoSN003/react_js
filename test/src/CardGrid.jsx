import Card from './Card';
import data from "./../data.json";
function CardGrid() {
 

    return (
        <div className="flex flex-wrap justify-center mt-10">
            {data.cursos.map((curso, index) => (
                <Card key={index}     
                nombre={curso.nombre} 
                aula={curso.aula} 
                estado={curso.estado} 
                horas_semanales={curso.horas_semanales} 
                creditos={curso.creditos}                
                horario={curso.horario}            
                profesor={curso.profesor}                
                cupo={curso.cupo}  
                />
            ))}
        </div>
    );
}

export default CardGrid;
/*
https://tailwindflex.com/@noob_dev/products-card-grid
*/