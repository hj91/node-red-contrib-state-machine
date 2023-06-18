/**

 state-machine.js - Copyright 2023 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/



module.exports = function(RED) {
    function StateMachineNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.states = config.states.split(",");
        node.currentState = null; // Now the currentState is null to represent the "Uninitialized" state

        // Display the default state (Uninitialized) as the node status
        node.status({fill:"blue", shape:"dot", text:"Uninitialized"});

        node.on('input', function(msg) {
           //  console.log("Received input: ", msg); // Debug log

            if (typeof msg.topic !== 'undefined' && typeof msg.payload === 'boolean' && msg.payload === true) {
                switch (msg.topic) {
                    case 'start':
                        node.currentState = 0; // The first state becomes the current state only when a 'start' message is received
                        break;
                    case 'next':
                        // Allow moving to the next state only if currentState is not null (i.e., not "Uninitialized")
                        if (node.currentState !== null && node.currentState < node.states.length - 1) {
                            node.currentState++;
                        }
                        break;
                    case 'previous':
                        // Allow moving to the previous state only if currentState is not null (i.e., not "Uninitialized")
                        if (node.currentState !== null && node.currentState > 0) {
                            node.currentState--;
                        }
                        break;
                    default:
                        console.log("Unexpected msg.topic: ", msg.topic); // Debug log
                        return;
                }

                // Send and display the current state only if currentState is not null (i.e., not "Uninitialized")
                if (node.currentState !== null) {
                    msg.payload = node.states[node.currentState];
                    node.send(msg);
                    node.status({fill:"blue", shape:"dot", text:node.states[node.currentState]});
                }
            } else {
                console.log("Input does not meet conditions"); // Debug log
            }
        });
    }
    RED.nodes.registerType("state-machine", StateMachineNode);
};

