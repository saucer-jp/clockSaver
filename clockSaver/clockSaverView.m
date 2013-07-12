//
//  clockSaverView.m
//  clockSaver
//
//  Created by Tsukasa Obara on 2013/07/12.
//  Copyright (c) 2013 saucerjp. All rights reserved.
//

#import "clockSaverView.h"
#import <WebKit/WebKit.h>

@implementation clockSaverView

- (id)initWithFrame:(NSRect)frame isPreview:(BOOL)isPreview
{
    self = [super initWithFrame:frame isPreview:isPreview];
    if (self) {
		webView = [[WebView alloc] initWithFrame:[self bounds] frameName:nil groupName:nil];
        [webView setMainFrameURL:[NSString stringWithFormat:@"file://%@/index.html", [[NSBundle bundleForClass:[self class]] resourcePath]]];
		[self addSubview:webView];
    }
    return self;
}

- (BOOL)hasConfigureSheet
{
    return NO;
}

- (NSWindow*)configureSheet
{
    return nil;
}

@end
