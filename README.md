# State Machine Node for Node-RED

This Node-RED  node, `state-machine`, allows you to define and manipulate a state machine in your Node-RED flows. 

## Overview

A state machine is a behavioral model. It can be used to represent the operation of many real-world systems including, but not limited to, industrial machines, network protocols, and user interfaces. In a state machine, the system can be in one state at a time from a finite number of states. Transitions from one state to another are triggered by events.

The `state-machine` node enables your Node-RED flow to keep track of a state machine's current state and to transition from one state to another based on incoming messages' topics. The node provides a user-friendly interface to add or remove states, and updates the node's status to reflect the current state of the state machine. 

## Use Case: Industrial Machine Operation

In industrial machine operations, there is often a need to track the sequence of operations. A particular sequence of operations might represent a normal workflow, whereas deviations from this sequence could indicate problems or errors. 

The `state-machine` node allows you to model such sequences as a state machine. Each state could represent an operation or a step in the process, and the `next` and `previous` events could represent the progression or regression of these steps. 

By feeding in data from your machine—such as sensor data or operation completion signals—as events into the state machine, your Node-RED flow could track the operation sequence in real-time and react to deviations from the expected sequence.

## Usage

1. Drag and drop the `state-machine` node into your flow.

2. Double-click on the node to open the node editor.

3. In the node editor, you can add states to the state machine by entering the name of the state in the "New state" field and clicking "Add state". You can remove states by entering the name of the state in the "Remove state" field and clicking "Remove state". 

4. The node reacts to incoming messages based on their topic:

   - A topic of `"start"` will change the state to the first state in the list.
   
   - A topic of `"next"` will change the state to the next state in the list.
   
   - A topic of `"previous"` will change the state to the previous state in the list.

5. The node will output a message with the payload set to the current state after each state change. 

6. The node's status will display the current state of the state machine.

## Contributing

Contributions are welcome. Please raise an issue for bugs, features, or suggestions.

## License

GPL-3.0

## Author 

Harshad Joshi @ Bufferstack.IO Analytics Technology LLP, Pune
