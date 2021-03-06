// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Joey doesn’t share food!', ' I wish I could, but I don’t want to.', 'How you doin?', 'They don’t know that we know they know we know.'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
 function RandomProjects() {
  fetch('/data').then(response => response.json()).then((stats) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    const statsListElement = document.getElementById('randomproject');
    const l=stats.length;
    statsListElement.innerHTML = '';
   
   var i;
    for( i=0;i<l;i++){
statsListElement.appendChild(
        createListElement( stats[i]));
    }
    // statsListElement.appendChild(
    //     createListElement( stats[0]));
    // statsListElement.appendChild(
    //     createListElement( stats[1]));
    //  statsListElement.appendChild(
    //     createListElement( stats[2]));
    //  statsListElement.appendChild(
    //     createListElement( stats[3]));
    //  statsListElement.appendChild(
    //     createListElement( stats[4]));
    // statsListElement.appendChild(
    //     createListElement( stats[5]));
    
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
