<script>
        document.addEventListener('contextmenu', function(e) {
            // Bloquea el menú contextual en todo el sitio
            e.preventDefault(); 
        });

        document.addEventListener('keydown', function(e) {
            // Bloquea F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (atajos comunes de desarrollador)
            if (e.keyCode == 123 || 
                (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || 
                (e.ctrlKey && e.keyCode == 85)) {
                e.preventDefault();
                return false;
            }
        });
    </script>