<div id='baca-juga'>
		<b:loop values='data:post.labels' var='label'>
		<b:if cond='data:label.isLast != &quot;true&quot;'>
		</b:if>
		<script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=bacajuga&amp;max-results=5&quot;'/>
		</b:loop>
		<script>
		var judulbacajuga=&quot;<b:switch var='data:blog.locale'><b:case value='id'/><h2>Baca Juga:</h2><b:default/><h2>Related:</h2></b:switch>&quot;
		var jumlahbacajuga=3;
		removeRelatedDuplicates();
		printRelatedLabels(&quot;<data:post.url/>&quot;);
		</script>
		</div>
