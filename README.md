# Sophisticated Chatbot Frontend

A modern, responsive chatbot interface built with React, TypeScript, and Tailwind CSS. Features a beautiful purple and pastel color scheme with smooth animations and real-time chat functionality.

## 🚀 Features

- **Modern UI/UX**: Clean, minimalist design with purple and pastel color palette
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Real-time Chat**: Smooth message animations and typing indicators
- **Message Status**: Visual indicators for message delivery status
- **Auto-scroll**: Automatic scrolling to new messages with manual scroll-to-bottom button
- **Error Handling**: Comprehensive error states with retry functionality
- **Keyboard Shortcuts**: Enter to send, Shift+Enter for new lines
- **Chat History**: Clear chat history functionality
- **Timestamps**: Message timestamps with smart formatting
- **Loading States**: Visual feedback during API calls

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript support

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd chatbot-frontend
```

### 2. Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 3. Environment Setup (Optional)

Create a `.env` file in the root directory if you want to configure a custom API endpoint:

```env
VITE_REACT_APP_API_URL=http://localhost:3001/api
```

**Note**: The application currently uses a demo API service with simulated responses. You can use it without any backend setup.

### 4. Start the Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start on `http://localhost:5173`

### 5. Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🔧 Configuration

### Connecting to Your Backend API

To connect the chatbot to your actual backend API:

1. **Update the API URL**: Set the `VITE_REACT_APP_API_URL` environment variable in your `.env` file
2. **Modify the API Service**: Edit `src/services/api.ts` and uncomment the actual fetch implementation
3. **Update API Response Format**: Ensure your backend returns responses in the expected format:

```typescript
interface ApiResponse {
  message: string;
  success: boolean;
  error?: string;
}
```

### Expected API Endpoint

The chatbot expects a POST endpoint at `/chat` that accepts:

```json
{
  "message": "User's message content"
}
```

And returns:

```json
{
  "message": "Bot's response",
  "success": true
}
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ChatHeader.tsx   # Chat header with title and controls
│   ├── ChatInput.tsx    # Message input with send button
│   ├── Message.tsx      # Individual message component
│   ├── MessageList.tsx  # Message list container
│   └── TypingIndicator.tsx # Typing animation component
├── hooks/
│   └── useChat.ts       # Custom hook for chat functionality
├── services/
│   └── api.ts           # API service for backend communication
├── types/
│   └── chat.ts          # TypeScript type definitions
├── utils/
│   └── formatters.ts    # Utility functions for formatting
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Customization

### Color Scheme

The application uses a purple and pastel color palette. To customize colors, modify the Tailwind classes in the components:

- **Primary**: `purple-500`, `purple-600`
- **Secondary**: `pink-500`, `pink-600`
- **Background**: `purple-50`, `pink-50`, `indigo-50`
- **Accents**: Various purple and pink shades

### Styling

The application uses Tailwind CSS for styling. Key design elements:

- **Gradients**: `bg-gradient-to-r from-purple-500 to-pink-500`
- **Shadows**: `shadow-lg`, `shadow-2xl`
- **Rounded corners**: `rounded-2xl`, `rounded-full`
- **Animations**: Custom fade-in animations and hover effects

## 🔍 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The chatbot is fully responsive with breakpoints:

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm to lg)
- **Desktop**: > 1024px (lg+)

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: If port 5173 is busy, Vite will automatically use the next available port
2. **Environment variables not loading**: Make sure your `.env` file is in the root directory and variables start with `VITE_`
3. **Build errors**: Clear node_modules and reinstall dependencies

### Getting Help

If you encounter issues:

1. Check the browser console for error messages
2. Ensure all dependencies are installed correctly
3. Verify Node.js version compatibility
4. Check that the development server is running

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository or contact the development team.

---

**Happy Chatting! 🎉**