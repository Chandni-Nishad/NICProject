
    function redirectToPage() 
    {
        var selectedOption = document.getElementById("redirectMenu").value;
        if (selectedOption) 
        {
            window.location.href = selectedOption;
        }
    }