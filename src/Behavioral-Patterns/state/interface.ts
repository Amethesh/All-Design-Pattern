// The State interface declares methods that all Concrete State should implement.
interface State {
    handle(context: MusicPlayer): void;
}

// Concrete State
class PlayingState implements State {
    handle(context: MusicPlayer) {
        console.log("Player is in playing state");
        // Implementation of behavior when in 'playing' state
    }
}

class PausedState implements State {
    handle(context: MusicPlayer) {
        console.log("Player is in paused state");
        // Implementation of behavior when in 'paused' state
    }
}

class StoppedState implements State {
    handle(context: MusicPlayer) {
        console.log("Player is in stopped state");
        // Implementation of behavior when in 'stopped' state
    }
}