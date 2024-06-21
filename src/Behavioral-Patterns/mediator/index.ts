// Mediator interface
interface ChatRoomMediator {
    showMessage(user: User, message: string): void;
}

// Concrete Mediator
class ChatRoom implements ChatRoomMediator {
    public showMessage(user: User, message: string): void {
        const time = new Date();
        const sender = user.getName();
        console.log(`${time.toLocaleString()} [${sender}]: ${message}`);
    }
}

// Colleague class
class User {
    private name: string;
    private chatRoom: ChatRoomMediator;

    constructor(name: string, chatRoom: ChatRoomMediator) {
        this.name = name;
        this.chatRoom = chatRoom;
    }

    public getName(): string {
        return this.name;
    }

    public send(message: string): void {
        this.chatRoom.showMessage(this, message);
    }
}

// Client code
const chatRoom = new ChatRoom();

const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);

user1.send("Hi Bob!");
user2.send("Hello Alice!");
