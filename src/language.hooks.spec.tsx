import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { LanguageProvider } from './language.context';
import { useLanguage } from './language.hooks';

describe('useLanguage specs', () => {
  it('should return a message with language equals "es" when it render the hook', () => {
    // Arrange
    const Provider: React.FunctionComponent = (props) => {
      return <LanguageProvider>{props.children}</LanguageProvider>
    }
    // Act
    const { result } = renderHook(() => useLanguage(), {
      wrapper: Provider,
    });

    act(() => {
      result.current.setLanguage('es');
    });


    // Assert
    expect(result.current.message).toEqual('The current language is: es');

  });
  it('should return a message with language equals "en" when it render the hook', () => {
    // Arrange
    const Provider: React.FunctionComponent = (props) => {
      return <LanguageProvider>{props.children}</LanguageProvider>
    }
    // Act
    const { result } = renderHook(() => useLanguage(), {
      wrapper: Provider,
    });

    act(() => {
      result.current.setLanguage('en');
    });


    // Assert
    expect(result.current.message).toEqual('The current language is: en');

  });
});
