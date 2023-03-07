const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    const nombre = document.querySelector('#name');
    event.preventDefault();

        // Verificar que todos los campos tengan un valor
        if(form.nombre.value&&form.correo.value) {
            // Mostrar SweetAlert
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Tu mensaje fue enviado con exito ${form.nombre.value}. Estaremos en contacto !`,
                showConfirmButton: false,
                timer: 1900,
                background: '#2c3639',
                color: '#fff',
            });
        } else {
            // Mostrar SweetAlert de error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor complete el formulario!',
                background: '#2c3639',
                color: '#fff',
            });
        }
    });