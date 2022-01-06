Follow along of video: https://www.youtube.com/watch?v=iQ_0Fd_N3Mk&t=170s&ab_channel=notJust%E2%80%A4dev


## What i learned:
1. How to conditionally set styles


```
const backgroundColor=type=== 'primary' ? 'black' : 'white';
    const textColor=type==="primary" ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable 
            style={[styles.button,{backgroundColor:backgroundColor}]}
            onPress={()=>{console.warn('Click')}}
            >
               <Text style={[styles.text,{color:textColor}]}> Custom Order</Text>
            </Pressable>
        </View>
    )
```
2. Rounded buttons border radius looks best when half of height (ex:If height is 40 border radius should be 20)