<h1 align="center">Push-Up Trainer</h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/ChrisAraneo/push-up-trainer/refs/heads/master/screenshot.jpg" alt="Push-Up Trainer screenshot" width="830px" height="435px"/>
  <br>
  <a href="https://github.com/ChrisAraneo/push-up-trainer/blob/master/package.json"><img src="https://img.shields.io/badge/version-v0.0.0-blue" alt="version"></a>
  <a href="https://github.com/ChrisAraneo/push-up-trainer/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Push-Up Trainer is released under the MIT license."></a>
  <br>
  <br>
  <em>Push-up workout trainer with timer and series tracking</em>
  <br>
</p>

## How It Works

1. **Setup**
   - User selects difficulty level (1-10)
   - Series count is calculated (Level × 5)
   - Timer duration is set (10 seconds per 5 push-ups)

2. **Active Workout**
   - User clicks "Start" button
   - Timer begins countdown
   - Push-up animation plays synchronized with timer
   - Series counter displays current progress

3. **Series Completion**
   - Timer reaches zero
   - Sound plays for feedback
   - Animation resets to beginning
   - Timer automatically starts next series
   - Series counter increments

4. **Workout Completion**
   - All series complete
   - Timer stops
   - Animation stops
   - "Start" button becomes available
   - Clicking "Start" resets and begins new workout

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ChrisAraneo/push-up-trainer.git
cd push-up-trainer
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development

Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:4200`

### Build for production

```bash
npm run build
```

Production-ready files will be generated in the `dist/` directory.

### Other commands

Run linting:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

Format code:
```bash
npm run format
```

Run tests:
```bash
npm test
```

## Technologies and Tools

- **Ember.js 6.5** - modern web framework
- **TypeScript** - static typing and type safety
- **Glimmer Components** - lightweight, modern component architecture
- **SCSS** - advanced styling with variables and nesting
- **Lottie-web** - high-quality animation rendering
- **FontAwesome** - icons for UI controls
- **Web Audio API** - sound playback

## Testing

Run the test suite:
```bash
npm test
```

Run type checking:
```bash
npm run lint:types
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Krzysztof Pająk (Chris Araneo)
