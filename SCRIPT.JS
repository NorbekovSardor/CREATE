let cars = [
        { id: 1, year: 1998, engine: 1, name: 'Tico'},
        { id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
        { id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
        { id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
        { id: 5, year: 2012, engine: 2, name: 'Malibu'},
        { id: 6, year: 2000, engine: 1.2, name: 'Damas'},
        { id: 7, year: 2018, engine: 2.4, name: 'Tracker'}
]

    //<<<<<<<<<<<<<<<<<<<<<<<<<upDate>>>>>>>>>>>>>>>>>>>>>>>>>
    const upDate = (car) => {
        const index = cars.findIndex(c => c.id === car.id);
        if (index !== -1) {
            cars[index].name = car.name;
            console.log(cars);
        } else {
            console.log( ` ${car.id} ID  topilmadi`);
        }
    };
    
    upDate({ id: 9, name: "BMW" }); 
    upDate({ id: 4, name: "Audi" });
    
        // <<<<<<<<<<<<<<<<<<<<<<<READ>>>>>>>>>>>>>>>>>>>>>>>c
        // const onRead = () => {
        //     console.log("Barcha mashinalar:");
        //     cars.forEach(car => {
        //         console.log(`ID: ${car.id}, Name: ${car.name}, Year: ${car.year}, Engine: ${car.engine}`);
        //     });
        // };
        
        // onRead();
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<CREATE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const onCreate = (car) =>{  
// cars.push(car)
// }
// onCreate({ id: 8, year: 2023, engine: 6, name: 'BMW'})
// console.log(cars);
// <<<<<<<<<<<<<<<<<<<<DELITE>>>>>>>>>>>>>>>>>>>>


// let onDelete = (p) => {
//  filtering = cars.filter((value) => value.id !== p);
// }
// onDelete(2)
// console.log(filtering);