const musicPlayer = new MusicPlayer(new StoppedState());

musicPlayer.request(); // Stopped state

musicPlayer.transitionTo(new PlayingState());
musicPlayer.request(); // Playing state

musicPlayer.transitionTo(new PausedState());
musicPlayer.request(); // Paused state