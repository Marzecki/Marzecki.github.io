var N;
var A;

self.addEventListener('message', (ev)=>{
    if(typeof(ev.data) == 'string') N = ev.data;
    else {
        console.log("started with " + ev.data);
        A = ev.data;
        var left_peak = 0;
        var prev_height = 0;
        var nadir = 0;
        var max_depth = 0;
        var depth;

        for(var i = 0; i < N; i++){
            if(A[i] > prev_height){
                if(A[i] >= left_peak){
                    depth = left_peak - nadir;
                    if(depth > max_depth){
                        max_depth = depth;
                        self.postMessage('Nowy najgłębszy: ' + max_depth + '<br>');
                    }
                    left_peak = A[i];
                    nadir = A[i];
                }
                else {
                    depth = A[i] - nadir;
                    if(depth > max_depth){
                        max_depth = depth;
                        self.postMessage('Nowy najgłębszy: ' + max_depth + '<br>');
                    }
                }
            }
            else {
                if(A[i] < nadir) {
                    nadir = A[i];
                }
            }
            prev_height = A[i];
        }

        self.postMessage('Wynik: ' + max_depth + '<br>');
        self.close();
    }
    
})