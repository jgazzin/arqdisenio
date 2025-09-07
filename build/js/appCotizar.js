console.log('hola mundo');

let data_cliente = {
    nombre: '',
    ciudad: '',
    celular: '',
    resumen: ''
}
let data_obra = [
    {
        data: '0',
        nombre: '',
        superficie: ''
    }
];

let data_precotizar = {
    'propuesta': {
        'cotizar': true,
    },
    'proyecto': {
        'cotizar': false,
        'relevamiento': false,
        'estructurales': false,
        'eletrica': false,
        'sanitaria': false,
        'gas': false,
        'iluminacion': false,
        'muebleCocina': false,
        'mueblePlacard': false,
        'detalleLocal': false,
    },
    'acompañamiento': {
        'cotizar': false,
    }
}


// FUNCIONES GENERALES
const $menu = document.querySelector('.nav i');

$menu.addEventListener('click', ()=> {
    $menu.parentElement.parentElement.parentElement.lastElementChild.classList.toggle('hidden');
})

// FUNCIONES INICIO
document.addEventListener('DOMContentLoaded', ()=> {
    cargarAmbientes();
});

// FUNCION CARGAR AMBIENTE
const $formAmbiente = document.getElementById('ambientes');
const $btnAdd = document.getElementById('add');
$btnAdd.addEventListener('click', () => {
    const listaAmbientes = $formAmbiente.querySelectorAll('.ambiente');
    listaAmbientes.forEach( ambiente => {
        const nombre = ambiente.querySelector('select').value;
        const superficie = ambiente.querySelector('input').value;
        const index = parseInt(ambiente.getAttribute('data-ambiente'));
        const data_ambiente = {
            data: index,
            nombre: nombre,
            superficie: superficie
        }
        data_obra.push(data_ambiente);
        console.log(data_obra);
    });
    cargarAmbientes();
});


// FUNCIONES CARGAR UX
function cargarAmbientes() {
    const $contenedorAmbiente = document.getElementById('ambientes');
    $contenedorAmbiente.innerHTML = '';
    data_obra.forEach( (obra, index) => {
        const itemAmbiente = document.createElement('div');
        itemAmbiente.classList.add('item', 'ambiente');
        itemAmbiente.setAttribute('data-ambiente', index);

        itemAmbiente.innerHTML = `
            <div class="item">
                <label for="ambiente">Nombre ambiente:</label>
                <select id="ambiente" name="ambiente">
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="cocina">Cocina</option>
                <option value="baño">Baño</option>
                <option value="lavadero">Lavadero</option>
                <option value="estar">Estar</option>
                <option value="comedor">Comedor</option>
                <option value="dormitorio">Dormitorio</option>
                <option value="garage">Garage</option>
                <option value="exterior">Exterior</option>
                <option value="otro">Otro</option>
            </select>
            </div>
            <div class="item">
                <label for="superficieAmbiente">Superficie ambiente (m²)</label>
                <input type="number" id="superficieAmbiente" name="superficieAmbiente" placeholder="Superficie del ambiente en m²">
            </div>`;
        
        $contenedorAmbiente.appendChild(itemAmbiente);
    });

}