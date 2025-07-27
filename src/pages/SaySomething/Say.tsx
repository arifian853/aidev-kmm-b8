import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Heart, Send, Users, Sparkles, AtSign } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';

import mentorData from '@/utils/MentorData.json';
import menteeData from '@/utils/MenteeData.json';

interface Message {
  id: string;
  type: 'mentor' | 'general';
  content: string;
  recipient?: string;
  mentions?: string[];
  timestamp: Date;
}

export const Say = () => {
  const [mentorMessage, setMentorMessage] = useState('');
  const [generalMessage, setGeneralMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  
  // Mentor message suggestions
  const [showMentorSuggestions, setShowMentorSuggestions] = useState(false);
  const [mentorSuggestions, setMentorSuggestions] = useState<string[]>([]);
  const [mentorCursorPosition, setMentorCursorPosition] = useState(0);
  const [currentMentorMention, setCurrentMentorMention] = useState('');
  const mentorTextareaRef = useRef<HTMLTextAreaElement>(null);
  
  // General message suggestions
  const [showGeneralSuggestions, setShowGeneralSuggestions] = useState(false);
  const [generalSuggestions, setGeneralSuggestions] = useState<string[]>([]);
  const [generalCursorPosition, setGeneralCursorPosition] = useState(0);
  const [currentGeneralMention, setCurrentGeneralMention] = useState('');
  const generalTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Combine all names for @ mentions
  const allNames = [
    ...mentorData.map(mentor => mentor.name),
    ...menteeData.map(mentee => mentee.name)
  ];

  // Only mentor names for mentor message
  const mentorNames = mentorData.map(mentor => mentor.name);

  // Handle @ mention functionality for mentor message
  const handleMentorMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const cursorPos = e.target.selectionStart;
    
    setMentorMessage(value);
    setMentorCursorPosition(cursorPos);

    // Check for @ mentions
    const textBeforeCursor = value.substring(0, cursorPos);
    const atIndex = textBeforeCursor.lastIndexOf('@');
    
    if (atIndex !== -1) {
      const mentionText = textBeforeCursor.substring(atIndex + 1);
      if (mentionText.length > 0 && !mentionText.includes(' ')) {
        setCurrentMentorMention(mentionText);
        const filteredSuggestions = mentorNames.filter(name => 
          name.toLowerCase().includes(mentionText.toLowerCase())
        );
        setMentorSuggestions(filteredSuggestions);
        setShowMentorSuggestions(true);
      } else if (mentionText.length === 0) {
        setMentorSuggestions(mentorNames);
        setShowMentorSuggestions(true);
      } else {
        setShowMentorSuggestions(false);
      }
    } else {
      setShowMentorSuggestions(false);
    }
  };

  // Handle @ mention functionality for general message
  const handleGeneralMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const cursorPos = e.target.selectionStart;
    
    setGeneralMessage(value);
    setGeneralCursorPosition(cursorPos);

    // Check for @ mentions
    const textBeforeCursor = value.substring(0, cursorPos);
    const atIndex = textBeforeCursor.lastIndexOf('@');
    
    if (atIndex !== -1) {
      const mentionText = textBeforeCursor.substring(atIndex + 1);
      if (mentionText.length > 0 && !mentionText.includes(' ')) {
        setCurrentGeneralMention(mentionText);
        const filteredSuggestions = allNames.filter(name => 
          name.toLowerCase().includes(mentionText.toLowerCase())
        );
        setGeneralSuggestions(filteredSuggestions);
        setShowGeneralSuggestions(true);
      } else if (mentionText.length === 0) {
        setGeneralSuggestions(allNames);
        setShowGeneralSuggestions(true);
      } else {
        setShowGeneralSuggestions(false);
      }
    } else {
      setShowGeneralSuggestions(false);
    }
  };

  // Handle mentor suggestion selection
  const handleMentorSuggestionClick = (name: string) => {
    const textBeforeCursor = mentorMessage.substring(0, mentorCursorPosition);
    const atIndex = textBeforeCursor.lastIndexOf('@');
    const textAfterCursor = mentorMessage.substring(mentorCursorPosition);
    
    const newMessage = mentorMessage.substring(0, atIndex + 1) + name + ' ' + textAfterCursor;
    setMentorMessage(newMessage);
    setShowMentorSuggestions(false);
    
    // Focus back to textarea
    if (mentorTextareaRef.current) {
      mentorTextareaRef.current.focus();
      const newCursorPos = atIndex + name.length + 2;
      setTimeout(() => {
        mentorTextareaRef.current?.setSelectionRange(newCursorPos, newCursorPos);
      }, 0);
    }
  };

  // Handle general suggestion selection
  const handleGeneralSuggestionClick = (name: string) => {
    const textBeforeCursor = generalMessage.substring(0, generalCursorPosition);
    const atIndex = textBeforeCursor.lastIndexOf('@');
    const textAfterCursor = generalMessage.substring(generalCursorPosition);
    
    const newMessage = generalMessage.substring(0, atIndex + 1) + name + ' ' + textAfterCursor;
    setGeneralMessage(newMessage);
    setShowGeneralSuggestions(false);
    
    // Focus back to textarea
    if (generalTextareaRef.current) {
      generalTextareaRef.current.focus();
      const newCursorPos = atIndex + name.length + 2;
      setTimeout(() => {
        generalTextareaRef.current?.setSelectionRange(newCursorPos, newCursorPos);
      }, 0);
    }
  };

  // Extract mentions from message
  const extractMentions = (text: string): string[] => {
    const mentionRegex = /@([^@\s]+(?:\s+[^@\s]+)*?)(?=\s|$|@)/g;
    const mentions: string[] = [];
    let match;
    
    while ((match = mentionRegex.exec(text)) !== null) {
      const mentionedName = match[1].trim();
      if (allNames.some(name => name.toLowerCase() === mentionedName.toLowerCase())) {
        mentions.push(mentionedName);
      }
    }
    
    return mentions;
  };

  // Send mentor message
  const sendMentorMessage = () => {
    if (mentorMessage.trim()) {
      const mentions = extractMentions(mentorMessage);
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'mentor',
        content: mentorMessage,
        mentions,
        timestamp: new Date()
      };
      setMessages(prev => [newMessage, ...prev]);
      setMentorMessage('');
      setShowMentorSuggestions(false);
    }
  };

  // Send general message
  const sendGeneralMessage = () => {
    if (generalMessage.trim()) {
      const mentions = extractMentions(generalMessage);
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'general',
        content: generalMessage,
        mentions,
        timestamp: new Date()
      };
      setMessages(prev => [newMessage, ...prev]);
      setGeneralMessage('');
      setShowGeneralSuggestions(false);
    }
  };

  // Format message content with highlighted mentions (Instagram style)
  const formatMessageContent = (content: string) => {
    // Create a copy to work with
    let processedContent = content;
    const mentionElements: { [key: string]: React.ReactElement } = {};
    
    // Find and replace each mention with a unique placeholder
    allNames.forEach((name, index) => {
      const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const mentionRegex = new RegExp(`@${escapedName}(?=\\s|$|[^a-zA-Z])`, 'gi');
      
      if (mentionRegex.test(processedContent)) {
        const isMentor = mentorNames.some(mentorName => 
          mentorName.toLowerCase() === name.toLowerCase()
        );
        
        const placeholder = `__MENTION_PLACEHOLDER_${index}__`;
        
        // Store the JSX element
        mentionElements[placeholder] = (
          <span 
            key={`mention-${index}`}
            className="font-semibold cursor-pointer hover:underline transition-all duration-200"
            style={{ 
              color: isMentor ? '#0066cc' : '#14b8a6',
              fontWeight: '600'
            }}
          >
            @{name}
          </span>
        );
        
        // Replace mention with placeholder
        processedContent = processedContent.replace(mentionRegex, placeholder);
      }
    });

    // Split by placeholders and rebuild with JSX elements
    const parts = processedContent.split(/(__MENTION_PLACEHOLDER_\d+__)/);
    
    return parts.map((part, index) => {
      if (mentionElements[part]) {
        return mentionElements[part];
      }
      return part;
    });
  };

  return (
    <>
      <Navbar />
      <div className='relative min-h-screen flex flex-col p-10 overflow-hidden' 
           style={{ backgroundColor: 'var(--white)' }}>
        
        {/* Background Pattern */}
        <BackgroundPattern variant="subtle" />
        
        {/* Background Layers */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: i % 2 === 0 
                ? `radial-gradient(circle at ${20 + i * 15}% ${30 + i * 10}%, rgba(20, 184, 166, ${0.02 + i * 0.01}) 0%, transparent 50%)`
                : `conic-gradient(from ${i * 45}deg at ${80 - i * 10}% ${70 - i * 8}%, rgba(20, 184, 166, ${0.01 + i * 0.005}) 0deg, transparent 60deg, rgba(20, 184, 166, ${0.01 + i * 0.005}) 120deg, transparent 180deg)`,
              transform: `rotate(${i * 15}deg) scale(${1 + i * 0.1})`,
              opacity: 0.3 + i * 0.05
            }}
          />
        ))}

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div 
                className="p-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                  boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                }}
              >
                <MessageCircle size={32} style={{ color: 'white' }} />
              </div>
              <Sparkles size={24} style={{ color: '#14b8a6' }} />
            </motion.div>
            
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ 
                background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Say Something
            </motion.h1>
            
            <motion.p
              className="text-lg opacity-70 max-w-2xl mx-auto"
              style={{ color: 'var(--black-dark)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Sampaikan pesan anonim untuk mentor atau teman seperjuanganmu. 
              Gunakan @ untuk mention seseorang secara spesifik.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Mentor Message Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative"
            >
              <Card 
                className="backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(239, 239, 239, 0.8)',
                  boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}
                    >
                      <Heart size={20} style={{ color: 'white' }} />
                    </div>
                    <span style={{ color: 'var(--black)' }}>Pesan untuk Mentor</span>
                  </CardTitle>
                  <p className="text-sm opacity-70" style={{ color: 'var(--black-dark)' }}>
                    Sampaikan terima kasih atau pesan khusus.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Textarea
                      ref={mentorTextareaRef}
                      placeholder="Tulis pesan anonim untuk mentor di sini... Gunakan @ untuk mention mentor spesifik"
                      value={mentorMessage}
                      onChange={handleMentorMessageChange}
                      className="min-h-[120px] resize-none border-0 focus:ring-2 focus:ring-teal-500"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        color: 'var(--black-dark)'
                      }}
                    />
                    
                    {/* Mentor Suggestions Dropdown */}
                    {showMentorSuggestions && mentorSuggestions.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-0 right-0 mb-1 bg-white rounded-lg shadow-lg border max-h-32 overflow-y-auto z-50"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                      >
                        {mentorSuggestions.map((name, index) => (
                          <div
                            key={index}
                            onClick={() => handleMentorSuggestionClick(name)}
                            className="px-3 py-2 hover:bg-teal-50 cursor-pointer transition-colors duration-200 flex items-center gap-2"
                          >
                            <Heart size={14} style={{ color: '#14b8a6' }} />
                            <span style={{ color: 'var(--black-dark)' }}>{name}</span>
                            <Badge className="ml-auto text-xs" style={{ backgroundColor: '#14b8a6', color: 'white' }}>
                              Mentor
                            </Badge>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                  
                  <Button 
                    onClick={sendMentorMessage}
                    disabled={!mentorMessage.trim()}
                    className="w-full transition-all duration-300 hover:shadow-lg text-white"
                    style={{ 
                      background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                      border: 'none'
                    }}
                  >
                    <Send size={16} className="mr-2" />
                    Kirim ke Mentor
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* General Message Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <Card 
                className="backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(239, 239, 239, 0.8)',
                  boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}
                    >
                      <AtSign size={20} style={{ color: 'white' }} />
                    </div>
                    <span style={{ color: 'var(--black)' }}>Pesan untuk Siapapun</span>
                  </CardTitle>
                  <p className="text-sm opacity-70" style={{ color: 'var(--black-dark)' }}>
                    Gunakan @ untuk mention nama mentor atau mentee secara spesifik
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Textarea
                      ref={generalTextareaRef}
                      placeholder="Tulis pesan anonim di sini... Gunakan @ untuk mention seseorang"
                      value={generalMessage}
                      onChange={handleGeneralMessageChange}
                      className="min-h-[120px] resize-none border-0 focus:ring-2 focus:ring-teal-500"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        color: 'var(--black-dark)'
                      }}
                    />
                    
                    {/* General Suggestions Dropdown - Fixed positioning */}
                    {showGeneralSuggestions && generalSuggestions.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-0 right-0 mb-1 bg-white rounded-lg shadow-lg border z-50"
                        style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          maxHeight: '200px',
                          overflowY: 'auto'
                        }}
                      >
                        {generalSuggestions.slice(0, 10).map((name, index) => {
                          const isMentor = mentorNames.includes(name);
                          return (
                            <div
                              key={index}
                              onClick={() => handleGeneralSuggestionClick(name)}
                              className="px-3 py-2 hover:bg-teal-50 cursor-pointer transition-colors duration-200 flex items-center gap-2"
                            >
                              {isMentor ? (
                                <Heart size={14} style={{ color: '#14b8a6' }} />
                              ) : (
                                <AtSign size={14} style={{ color: '#14b8a6' }} />
                              )}
                              <span style={{ color: 'var(--black-dark)' }}>{name}</span>
                              {isMentor && (
                                <Badge className="ml-auto text-xs" style={{ backgroundColor: '#14b8a6', color: 'white' }}>
                                  Mentor
                                </Badge>
                              )}
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </div>
                  
                  <Button 
                    onClick={sendGeneralMessage}
                    disabled={!generalMessage.trim()}
                    className="w-full transition-all duration-300 hover:shadow-lg text-white"
                    style={{ 
                      background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                      border: 'none'
                    }}
                  >
                    <Send size={16} className="mr-2" />
                    Kirim Pesan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Messages Display */}
          {messages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card 
                className="backdrop-blur-sm border-0 shadow-lg"
                style={{ 
                  backgroundColor: 'rgba(239, 239, 239, 0.8)',
                  boxShadow: '0 10px 25px rgba(20, 184, 166, 0.1)'
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}
                    >
                      <Users size={20} style={{ color: 'white' }} />
                    </div>
                    <span style={{ color: 'var(--black)' }}>Pesan Terkirim</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            className="text-xs text-white"
                            style={{
                              backgroundColor: message.type === 'mentor' ? '#14b8a6' : '#0d9488'
                            }}
                          >
                            {message.type === 'mentor' ? 'Untuk Mentor' : 'Pesan Umum'}
                          </Badge>
                          <span className="text-xs opacity-60" style={{ color: 'var(--black-dark)' }}>
                            {message.timestamp.toLocaleTimeString('id-ID')}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--black-dark)' }}>
                          {formatMessageContent(message.content)}
                        </p>
                        {message.mentions && message.mentions.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {message.mentions.map((mention, idx) => {
                              const isMentor = mentorNames.some(name => name.toLowerCase() === mention.toLowerCase());
                              return (
                                <Badge 
                                  key={idx} 
                                  variant="outline" 
                                  className="text-xs"
                                  style={{
                                    borderColor: isMentor ? '#0066cc' : '#14b8a6',
                                    color: isMentor ? '#0066cc' : '#14b8a6'
                                  }}
                                >
                                  @{mention}
                                </Badge>
                              );
                            })}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
