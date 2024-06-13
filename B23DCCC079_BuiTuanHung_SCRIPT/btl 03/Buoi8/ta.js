function showProfile() {
    var profile = document.querySelector('.profile');
    if (profile.style.display != "block"){
        profile.style.display = "block";
        profile.classList.add('slide-left');
    } else {
        profile.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').addEventListener('input', function() {
        let filter = this.value.toLowerCase();
        let items = document.querySelectorAll('#item-list li');
        let suggestionsContainer = document.getElementById('suggestions-container');
        
        // Clear previous suggestions
        suggestionsContainer.innerHTML = '';

        if (filter) {
            items.forEach(function(item) {
                if (item.textContent.toLowerCase().includes(filter)) {
                    let suggestionItem = document.createElement('div');
                    suggestionItem.textContent = item.textContent;
                    suggestionItem.classList.add('suggestion');
                    suggestionItem.addEventListener('click', function() {
                        document.getElementById('search-input').value = this.textContent;
                        filterItems(this.textContent);
                        suggestionsContainer.innerHTML = '';
                    });
                    suggestionsContainer.appendChild(suggestionItem);
                }
            });
        }
        
        filterItems(filter);
    });

    function filterItems(filter) {
        let items = document.querySelectorAll('#item-list li');
        items.forEach(function(item) {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }
});