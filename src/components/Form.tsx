import { useState } from "react";
import { categories } from "../data/categories";

export default function Form() {

  const [activity, setActivity] = useState({
    category:'1',
    name:'',
    calories:0
  });

 
  return (
    <div>
       <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="category" className="font-bold">Categoría:</label>
          <select 
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            name="" id="category" value={activity.category}>
              {categories.map(category => (
                <option
                key={category.id}
                value={category.id}
                >{category.name} </option> 
              ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="activity" className="font-bold">Actividad:</label>
          <input id="activity"
                  type="text"
                  className="border border-slate-300 p-2 rounded-lg"
                  placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicletas"
                  value={activity.name} />
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="activity" className="font-bold">Calorías:</label>
          <input id="calories"
                  type="number"
                  className="border border-slate-300 p-2 rounded-lg"
                  placeholder="Calorías. ej. 300 0 500"
                  value={activity.calories} />
        </div>
        <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value="Guardar comida o Guardar Ejercicio" />
       </form>
    </div>
  )
}
