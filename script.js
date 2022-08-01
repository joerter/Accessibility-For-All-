      
    function getOrganizations() {
    return window.ORGANIZATIONS;
  }

  function doSomething(event) {
    event.preventDefault();
    console.log(event);
    document.getElementById('test').innerHTML =
      'Hi! I hope you have an amazing day. ';
    var input = document.getElementById('address').value;
    console.log(input);

    var organizationsContainer = document.getElementById('organizations');
    var allOrganizations = getOrganizations();

    // DOM Manipulation
    for (let i = 0; i < allOrganizations.length; i++) {
      var orgContainer = document.createElement('div');
      orgContainer.classList.add('organization');
      //var image = document.createElement('img');
      var address = document.createElement('p');
      var city = document.createElement('p');
      var zipCode = document.createElement('p');
      var state = document.createElement('p');
      var name = document.createElement('p'); // create a <p></p> element
      var phoneNumber = document.createElement('p');
      var checkboxLabel = document.createElement('label');
      var checkbox = document.createElement('input');
      checkbox.setAttribute(`type`, `checkbox`);

      

      var currentOrg = allOrganizations[i];
      name.innerHTML = `${currentOrg.name}`;
      address.innerHTML = `${currentOrg.streetAddress}`;
      city.innerHTML = `${currentOrg.city}`;
      zipCode.innerHTML = `${currentOrg.zipCode}`;
      state.innerHTML = `${currentOrg.state}`;
      phoneNumber.innerHTML = `${currentOrg.phoneNumber}`;
      checkboxLabel.innerHTML = "select the checkbox if you like this organization"
      //image.src = currentOrg.image;

      orgContainer.appendChild(name);
      orgContainer.appendChild(address);
      orgContainer.appendChild(city);
      orgContainer.appendChild(zipCode);
      orgContainer.appendChild(state);
      orgContainer.appendChild(phoneNumber);
      orgContainer.appendChild(checkboxLabel);
      checkboxLabel.appendChild(checkbox);
      //orgContainer.appendChild(image);
      organizationsContainer.appendChild(orgContainer); // append the new element to the div
    }

  }

  const form = document.getElementById('form');
  form.addEventListener('submit', doSomething);

